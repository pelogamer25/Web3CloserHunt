import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, ChevronDown, Loader2 } from 'lucide-react';
import { FormData, COUNTRIES, EXP_YEARS_OPTIONS, EXP_TYPES_OPTIONS, DEAL_SIZE_OPTIONS } from '../types';

interface ApplicationFormProps {
  id?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ id }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    country: '',
    phoneNumber: '',
    instagramUrl: '',
    experienceYears: '',
    experienceTypes: [],
    avgDealSize: '',
    workedCommissionOnly: null,
    whyConsider: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const current = prev.experienceTypes;
      if (current.includes(value)) {
        return { ...prev, experienceTypes: current.filter(t => t !== value) };
      } else {
        return { ...prev, experienceTypes: [...current, value] };
      }
    });
  };

  const handleSalaryRadio = (value: 'yes' | 'no') => {
    setFormData(prev => ({ ...prev, workedCommissionOnly: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!formData.firstName || !formData.lastName || !formData.country || !formData.phoneNumber || !formData.instagramUrl || !formData.experienceYears || !formData.avgDealSize || !formData.workedCommissionOnly || !formData.whyConsider) {
      setError("All fields are required.");
      return;
    }

    if (formData.experienceTypes.length === 0) {
      setError("Please select at least one type of experience.");
      return;
    }

    if (formData.workedCommissionOnly === 'no') {
       // Visual error handled in UI, but block submit
       return;
    }

    setIsSubmitting(true);

    // Simulate API Call / Google Sheets POST
    // In production: await fetch('YOUR_GOOGLE_SCRIPT_URL', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      console.log("Form Submitted Payload:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto glass-panel p-12 rounded-2xl text-center border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
             <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Application Received</h3>
        <p className="text-gray-400 mb-8">
          Your profile is under review by our scouting team. <br/>
          If your experience matches our active hunts, we will contact you via WhatsApp within 48 hours.
        </p>
        <div className="text-sm text-emerald-600 font-medium uppercase tracking-widest">
          Do not double submit
        </div>
      </motion.div>
    );
  }

  const isDisqualified = formData.workedCommissionOnly === 'no';

  return (
    <div id={id} className="w-full max-w-3xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-3xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Closer Application</h2>
        <p className="text-center text-gray-500 text-sm mb-10">Complete accuracy is required. We verify all claims.</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all input-autofill-fix"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all input-autofill-fix"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Country */}
          <div className="space-y-2 relative">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Country of Residence</label>
            <div className="relative">
              <select 
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-gray-900">Select Country</option>
                {COUNTRIES.map(c => <option key={c} value={c} className="bg-gray-900">{c}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Phone & Insta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Phone (WhatsApp)</label>
              <input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all input-autofill-fix"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Instagram URL</label>
              <input 
                type="url" 
                name="instagramUrl"
                value={formData.instagramUrl}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all input-autofill-fix"
                placeholder="instagram.com/yourhandle"
              />
            </div>
          </div>

          {/* Years Experience */}
          <div className="space-y-2 relative">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Years of Closing Experience</label>
            <div className="relative">
              <select 
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleInputChange}
                className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-gray-900">Select Experience Level</option>
                {EXP_YEARS_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-gray-900">{opt}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Type of Experience - Checkboxes */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Type of Experience (Select all that apply)</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {EXP_TYPES_OPTIONS.map(type => (
                <div 
                  key={type}
                  onClick={() => handleCheckboxChange(type)}
                  className={`cursor-pointer px-4 py-3 rounded-lg border transition-all flex items-center gap-3 ${
                    formData.experienceTypes.includes(type) 
                      ? 'bg-emerald-500/10 border-emerald-500/50' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                    formData.experienceTypes.includes(type) ? 'bg-emerald-500 border-emerald-500' : 'border-gray-500'
                  }`}>
                     {formData.experienceTypes.includes(type) && <CheckCircle size={14} className="text-black" />}
                  </div>
                  <span className={`text-sm ${formData.experienceTypes.includes(type) ? 'text-emerald-100' : 'text-gray-300'}`}>{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Average Deal Size */}
          <div className="space-y-2 relative">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Average Deal Size Closed (€ / $)</label>
            <div className="relative">
              <select 
                name="avgDealSize"
                value={formData.avgDealSize}
                onChange={handleInputChange}
                className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-gray-900">Select Deal Size</option>
                {DEAL_SIZE_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-gray-900">{opt}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Commission Only Validation */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Have you ever worked without a fixed salary?</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => handleSalaryRadio('yes')}
                className={`flex-1 py-3 rounded-lg border text-sm font-medium transition-all ${
                  formData.workedCommissionOnly === 'yes'
                    ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleSalaryRadio('no')}
                className={`flex-1 py-3 rounded-lg border text-sm font-medium transition-all ${
                  formData.workedCommissionOnly === 'no'
                    ? 'bg-red-500/10 border-red-500 text-red-400'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                No
              </button>
            </div>
            <AnimatePresence>
              {isDisqualified && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm flex items-start gap-2">
                    <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                    <span>This role is strictly commission-based. Experience without a safety net is required.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Why Consider */}
          <div className="space-y-2">
             <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Why should we consider you?</label>
             <textarea 
               name="whyConsider"
               value={formData.whyConsider}
               onChange={handleInputChange}
               rows={4}
               className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
               placeholder="Briefly describe your mindset and closing style..."
             />
          </div>

          {/* Hard Filter Warning */}
          <div className="py-4 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-amber-400/80 mb-6 text-sm font-medium">
              <AlertTriangle size={16} />
              <span>Applications without real closing experience will be ignored.</span>
            </div>

            {error && (
               <div className="mb-4 text-center text-red-400 text-sm bg-red-500/10 py-2 rounded border border-red-500/20">
                 {error}
               </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isDisqualified}
              className={`w-full group relative flex items-center justify-center py-4 px-8 rounded-xl font-bold text-lg tracking-wide overflow-hidden transition-all duration-300
                ${isDisqualified 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:scale-[1.01]'
                }
              `}
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                <>
                  <span className="relative z-10">SUBMIT APPLICATION</span>
                  {!isDisqualified && (
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-[800ms] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  )}
                </>
              )}
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default ApplicationForm;