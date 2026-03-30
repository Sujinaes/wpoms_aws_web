import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Factory,
  ShoppingCart,
  User,
  Globe,
  Phone,
  MapPin,
  BadgeCheck,
  Lock,
  Calendar,
  Mail,
  Upload,
} from 'lucide-react';
import styles from './Register.module.css';

// ── Constants 

const STEPS = [
  { label: 'Basic Info', sub: 'Account Setup' },
  { label: 'Select Role', sub: 'Account Type' },
  { label: 'Role Details', sub: 'Organization' },
];

const ROLES = [
  { id: 'manufacturer', icon: <Factory size={28} />, title: 'Manufacturer', desc: 'Production & warranty management' },
  { id: 'vendor', icon: <ShoppingCart size={28} />, title: 'Vendor', desc: 'Sales & purchase orders' },
  // { id: 'staff',        icon: <User size={28} />,         title: 'Staff',        desc: 'Internal team, limited access' },
  // { id: 'customer',     icon: <Globe size={28} />,        title: 'Customer',     desc: 'Track warranties & orders' },
];

// ── Zod Schemas ───────────────────────────────────────────────────────────────

const basicInfoSchema = z
  .object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Must contain at least one number')
      .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const roleSchema = z.object({
  role: z.enum(['manufacturer', 'vendor', 'staff', 'customer'], {
    required_error: 'Please select a role to continue',
  }),
});

const vendorDetailsSchema = z.object({
  vendorName: z.string().min(2, 'Vendor name is required'),
  vendorEmail: z.string().email('Enter a valid business email'),
  vendorAddress: z.string().min(5, 'Address is required'),
  vendorCity: z.string().min(2, 'City is required'),
  vendorPhone: z.string().min(7, 'Enter a valid phone number'),
  vendorGstNo: z.string().min(3, 'GST / Registration number is required'),
});

const manufacturerDetailsSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  companyEmail: z.string().email('Enter a valid company email'),
  companyAddress: z.string().min(5, 'Registered address is required'),
  companyPhone: z.string().min(7, 'Enter a valid phone number'),
  companyGstNo: z.string().min(3, 'GST / Business Reg No. is required'),
});

// const staffDetailsSchema = z.object({
//   staffId:      z.string().min(2, 'Staff ID is required'),
//   tempPassword: z.string().min(6, 'Temporary password is required'),
// });

// const customerDetailsSchema = z.object({
//   customerPhone:        z.string().min(7, 'Enter a valid phone number'),
//   customerDob:          z.string().min(1, 'Date of birth is required'),
//   shippingAddress:      z.string().min(10, 'Please enter a full shipping address'),
//   primaryContactNumber: z.string().min(7, 'Enter a valid contact number'),
// });

// Returns the correct schema for step 2 based on selected role
const getRoleDetailsSchema = (role) => {
  switch (role) {
    case 'vendor': return vendorDetailsSchema;
    case 'manufacturer': return manufacturerDetailsSchema;
    // case 'staff':        return staffDetailsSchema;
    // case 'customer':     return customerDetailsSchema;
    default: return z.object({});
  }
};

// ── Component ─────────────────────────────────────────────────────────────────

const Register = () => {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Persisted form data across all steps
  const [allData, setAllData] = useState({});

  // ── Step 0 form ──────────────────────────────────────────────────
  const basicForm = useForm({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '' },
  });
  
  const password = basicForm.watch('password');

  // ── Step 1 form ──────────────────────────────────────────────────
  const roleForm = useForm({
    resolver: zodResolver(roleSchema),
    defaultValues: { role: '' },
  });
  const selectedRole = roleForm.watch('role');

  // ── Step 2 form (dynamic schema based on role) ───────────────────
  const detailsForm = useForm({
    resolver: zodResolver(getRoleDetailsSchema(allData.role || selectedRole)),
    defaultValues: {
      vendorName: '', vendorEmail: '', vendorAddress: '', vendorCity: '', vendorPhone: '', vendorGstNo: '',
      companyName: '', companyEmail: '', companyAddress: '', companyPhone: '', companyGstNo: '',
      // staffId: '', tempPassword: '',
      // customerPhone: '', customerDob: '', shippingAddress: '', primaryContactNumber: '',
    },
  });

  // ── Navigation ───────────────────────────────────────────────────
  const handleBasicSubmit = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(1);
  };

  const handleRoleSubmit = (data) => {
    setAllData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleDetailsSubmit = (data) => {
    const finalData = { ...allData, ...data };
    console.log('Final submission:', finalData);
    toast.success('Account created successfully! Welcome aboard.');
  };

  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));

  // ── Password strength ────────────────────────────────────────────
  const getStrength = (pwd) => {
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };
  const strength = getStrength(password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Strong', 'Very Strong'][strength];
  const strengthColor = ['', '#ef4444', '#f59e0b', '#745b00', '#16a34a'][strength];

  const progressPct = Math.round(((step + 1) / STEPS.length) * 100);

  // ── Layout helpers ───────────────────────────────────────────────
  const Field = ({ label, error, children }) => (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <p className={styles.fieldError}>{error}</p>}
    </div>
  );

  const InputRow = ({ children }) => (
    <div className={styles.inputRow}>{children}</div>
  );

  // ── Step 0: Basic Info ───────────────────────────────────────────
  const renderBasicInfo = () => (
    <div className={styles.stepContent}>
      <header className={styles.stepHeader}>
        <h1 className={styles.stepTitle}>Create Your Account</h1>
        <p className={styles.stepSubtitle}>
          Begin your archival journey by providing your primary identity details.
        </p>
      </header>

      <form className={styles.form} onSubmit={basicForm.handleSubmit(handleBasicSubmit)}>
        <div className={styles.formCard}>

          <Field label="Full Name" error={basicForm.formState.errors.fullName?.message}>
            <div className={styles.inputWrapper}>
              <input
                {...basicForm.register('fullName')}
                type="text"
                className={styles.input}
                placeholder="e.g. Alistair Thorne"
              />
              <span className={styles.inputIcon}><User size={18} /></span>
            </div>
          </Field>

          <Field label="Email Address" error={basicForm.formState.errors.email?.message}>
            <div className={styles.inputWrapper}>
              <input
                {...basicForm.register('email')}
                type="email"
                className={styles.input}
                placeholder="a.thorne@enterprise.com"
              />
              <span className={styles.inputIcon}><Mail size={18} /></span>
            </div>
          </Field>

          <Field label="Password" error={basicForm.formState.errors.password?.message}>
            <div className={styles.inputWrapper}>
              <input
                {...basicForm.register('password')}
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="••••••••••••"
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {password && (
              <div className={styles.strengthWrap}>
                <div className={styles.strengthBars}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={styles.strengthBar}
                      style={{ backgroundColor: i <= strength ? strengthColor : '#dee3ec' }}
                    />
                  ))}
                </div>
                <span className={styles.strengthLabel} style={{ color: strengthColor }}>
                  {strengthLabel}
                </span>
              </div>
            )}
          </Field>

          <Field label="Confirm Password" error={basicForm.formState.errors.confirmPassword?.message}>
            <div className={styles.inputWrapper}>
              <input
                {...basicForm.register('confirmPassword')}
                type={showConfirm ? 'text' : 'password'}
                className={styles.input}
                placeholder="••••••••••••"
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowConfirm((v) => !v)}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </Field>

        </div>

        <footer className={styles.stepFooter}>
          <Link to="/login" className={styles.backTextBtn}>
            <ArrowLeft size={16} /> Back to Login
          </Link>
          <div className={styles.footerRight}>
            <button type="submit" className={styles.btnPrimary}>
              Next Step <ArrowRight size={18} />
            </button>
          </div>
        </footer>
      </form>
    </div>
  );

  // ── Step 1: Select Role ──────────────────────────────────────────
  const renderSelectRole = () => (
    <div className={styles.stepContent}>
      <header className={styles.stepHeader}>
        <h1 className={styles.stepTitle}>What is your role?</h1>
        <p className={styles.stepSubtitle}>
          Choose the identity that best describes your workflow. This will tailor your experience
          and permissions within the archive.
        </p>
      </header>

      <form onSubmit={roleForm.handleSubmit(handleRoleSubmit)}>
        <Controller
          name="role"
          control={roleForm.control}
          render={({ field, fieldState }) => (
            <>
              <div className={styles.roleGrid}>
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={`${styles.roleCard} ${field.value === r.id ? styles.roleCardActive : ''}`}
                    onClick={() => field.onChange(r.id)}
                  >
                    {field.value === r.id && (
                      <div className={styles.roleCheckBadge}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                    )}
                    <div className={`${styles.roleIconWrap} ${field.value === r.id ? styles.roleIconActive : ''}`}>
                      {r.icon}
                    </div>
                    <h3 className={styles.roleCardTitle}>{r.title}</h3>
                    <p className={styles.roleCardDesc}>{r.desc}</p>
                  </button>
                ))}
              </div>
              {fieldState.error && (
                <p className={styles.fieldError} style={{ marginTop: 8 }}>
                  {fieldState.error.message}
                </p>
              )}
            </>
          )}
        />

        <footer className={styles.stepFooter}>
          <button type="button" className={styles.backTextBtn} onClick={handlePrev}>
            <ArrowLeft size={18} /> Back
          </button>
          <div className={styles.footerRight}>
            <button type="submit" className={styles.btnPrimary}>
              Next Step <ArrowRight size={18} />
            </button>
          </div>
        </footer>
      </form>
    </div>
  );

  // ── Step 2: Role Details ─────────────────────────────────────────
  const renderRoleDetails = () => {
    const role = allData.role;
    const { register, handleSubmit, formState: { errors } } = detailsForm;

    const titles = {
      vendor: { title: 'Vendor Details', subtitle: 'Please provide the official credentials for your business entity to proceed with verification.' },
      manufacturer: { title: 'Manufacturer Details', subtitle: 'Provide official organizational information for record archival.' },
      // staff:        { title: 'Staff Details',         subtitle: 'Finalize your institutional credentials to access the WPOMS secure ledger.' },
      // customer:     { title: 'Customer Details',      subtitle: 'Provide the primary administrative contact details for seamless warranty management.' },
    };
    const { title, subtitle } = titles[role] || { title: 'Role Details', subtitle: '' };

    return (
      <div className={styles.stepContent}>
        <header className={styles.stepHeader}>
          <h1 className={styles.stepTitle}>{title}</h1>
          <p className={styles.stepSubtitle}>{subtitle}</p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit(handleDetailsSubmit)}>
          <div className={styles.formCard}>

            {role === 'vendor' && (
              <>
                <InputRow>
                  <Field label="Vendor Name" error={errors.vendorName?.message}>
                    <input {...register('vendorName')} type="text" className={styles.input} placeholder="Legal Business Name" />
                  </Field>
                  <Field label="Business Email" error={errors.vendorEmail?.message}>
                    <input {...register('vendorEmail')} type="email" className={styles.input} placeholder="example@company.com" />
                  </Field>
                </InputRow>
                <InputRow>
                  <Field label="Address" error={errors.vendorAddress?.message}>
                    <input {...register('vendorAddress')} type="text" className={styles.input} placeholder="Street Address, Building No." />
                  </Field>
                  <Field label="Place / City" error={errors.vendorCity?.message}>
                    <input {...register('vendorCity')} type="text" className={styles.input} placeholder="e.g. New York" />
                  </Field>
                </InputRow>
                <InputRow>
                  <Field label="Phone" error={errors.vendorPhone?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('vendorPhone')} type="tel" className={styles.input} placeholder="+1 (000) 000-0000" />
                      <span className={styles.inputIcon}><Phone size={18} /></span>
                    </div>
                  </Field>
                  <Field label="GST Reg No" error={errors.vendorGstNo?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('vendorGstNo')} type="text" className={styles.input} placeholder="Registration ID" />
                      <span className={styles.inputIcon}><BadgeCheck size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <Field label="Business Credentials">
                  <div className={styles.uploadZone}>
                    <input type="file" className={styles.fileInput} />
                    <div className={styles.uploadInner}>
                      <span className={styles.uploadIcon}><Upload size={28} /></span>
                      <p className={styles.uploadTitle}>Upload License / Certificate — PDF JPG PNG</p>
                      <p className={styles.uploadSub}>Drag and drop or click to browse files</p>
                    </div>
                  </div>
                </Field>
              </>
            )}

            {role === 'manufacturer' && (
              <>
                <InputRow>
                  <Field label="Company Name" error={errors.companyName?.message}>
                    <input {...register('companyName')} type="text" className={styles.input} placeholder="e.g. Heritage Manufacturing Ltd" />
                  </Field>
                  <Field label="Company Email" error={errors.companyEmail?.message}>
                    <input {...register('companyEmail')} type="email" className={styles.input} placeholder="corporate@heritage.com" />
                  </Field>
                </InputRow>
                <Field label="Registered Company Address" error={errors.companyAddress?.message}>
                  <input {...register('companyAddress')} type="text" className={styles.input} placeholder="Suite 400, Industrial Plaza, London, UK" />
                </Field>
                <InputRow>
                  <Field label="Company Phone" error={errors.companyPhone?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('companyPhone')} type="tel" className={styles.input} placeholder="+44 20 7946 0000" />
                      <span className={styles.inputIcon}><Phone size={18} /></span>
                    </div>
                  </Field>
                  <Field label="GST / Business Reg No." error={errors.companyGstNo?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('companyGstNo')} type="text" className={styles.input} placeholder="GB 123 4567 89" />
                      <span className={styles.inputIcon}><BadgeCheck size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <Field label="Certification Documents">
                  <div className={styles.uploadZone}>
                    <input type="file" className={styles.fileInput} />
                    <div className={styles.uploadInner}>
                      <span className={styles.uploadIcon}><Upload size={28} /></span>
                      <p className={styles.uploadTitle}>Upload License / Certificate</p>
                      <p className={styles.uploadSub}>PDF, JPG, or PNG (Max 10MB)</p>
                    </div>
                  </div>
                </Field>
              </>
            )}

            {/* {role === 'staff' && (
              <>
                <InputRow>
                  <Field label="Staff ID" error={errors.staffId?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('staffId')} type="text" className={styles.input} placeholder="Enter ID" />
                      <span className={styles.inputIcon}><BadgeCheck size={18} /></span>
                    </div>
                  </Field>
                  <Field label="Temporary Password" error={errors.tempPassword?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('tempPassword')} type="password" className={styles.input} placeholder="••••••••" />
                      <span className={styles.inputIcon}><Lock size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <div className={styles.infoBox}>
                  <span className={styles.infoIcon}>ℹ</span>
                  <p className={styles.infoText}>
                    Staff accounts are provisioned by your Manufacturer. If you do not have your
                    temporary credentials, please contact your regional administrator.
                  </p>
                </div>
              </>
            )} */}

            {/* {role === 'customer' && (
              <>
                <InputRow>
                  <Field label="Phone Number" error={errors.customerPhone?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('customerPhone')} type="tel" className={styles.input} placeholder="+1 (555) 000-0000" />
                      <span className={styles.inputIcon}><Phone size={18} /></span>
                    </div>
                  </Field>
                  <Field label="Date of Birth" error={errors.customerDob?.message}>
                    <div className={styles.inputWrapper}>
                      <input {...register('customerDob')} type="date" className={styles.input} />
                      <span className={styles.inputIcon}><Calendar size={18} /></span>
                    </div>
                  </Field>
                </InputRow>
                <Field label="Shipping Address" error={errors.shippingAddress?.message}>
                  <div className={styles.inputWrapper}>
                    <textarea
                      {...register('shippingAddress')}
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Enter full street address, apartment, suite, etc."
                      rows={3}
                    />
                    <span className={`${styles.inputIcon} ${styles.inputIconTop}`}><MapPin size={18} /></span>
                  </div>
                </Field>
                <Field label="Primary Contact Number" error={errors.primaryContactNumber?.message}>
                  <div className={styles.inputWrapper}>
                    <input {...register('primaryContactNumber')} type="tel" className={styles.input} placeholder="+1 (555) 000-0000" />
                    <span className={styles.inputIcon}><Phone size={18} /></span>
                  </div>
                </Field>
              </>
            )} */}

          </div>

          <footer className={styles.stepFooter}>
            <button type="button" className={styles.backTextBtn} onClick={handlePrev}>
              <ArrowLeft size={16} /> Back
            </button>
            <div className={styles.footerRight}>
              <button type="submit" className={styles.btnPrimary}>
                Create Account
              </button>
            </div>
          </footer>
        </form>
      </div>
    );
  };

  // ── Sidebar & shell ──────────────────────────────────────────────
  return (
    <main className={styles.registerPage}>
      <aside className={styles.sidebar}>
        <div className={styles.decorativeCircle1} />
        <div className={styles.decorativeCircle2} />

        <div className={styles.brandingContent}>
          <div className={styles.logoRow}>
            <div className={styles.logoMark}>
              <span className={styles.logoLetter}>W</span>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>WPOMS</span>
              <span className={styles.logoSubtitle}>Enterprise Management</span>
            </div>
          </div>

          <h2 className={styles.headline}>
            Warranty &amp; Purchase Order Management System
          </h2>

          <nav className={styles.stepTracker}>
            <div className={styles.trackerLine} />
            {STEPS.map((s, i) => {
              const isDone = i < step;
              const isActive = i === step;
              return (
                <div key={i} className={styles.trackerItem}>
                  <div className={`${styles.trackerDot} ${isDone ? styles.trackerDotDone : ''} ${isActive ? styles.trackerDotActive : ''}`}>
                    {isDone ? <Check size={12} strokeWidth={3} /> : <span className={styles.trackerNum}>{i + 1}</span>}
                  </div>
                  <div>
                    <p className={`${styles.trackerStepLabel} ${isActive ? styles.trackerStepLabelActive : ''}`}>{s.sub}</p>
                    <p className={`${styles.trackerStepName} ${isActive ? styles.trackerStepNameActive : isDone ? styles.trackerStepNameDone : ''}`}>{s.label}</p>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        <div className={styles.brandingFooter}>
          <div className={styles.goldDivider} />
          <p className={styles.brandingTagline}>Refining the digital archive for global institutions.</p>
        </div>
      </aside>

      <section className={styles.formPanel}>
        <header className={styles.progressHeader}>
          <div className={styles.progressMeta}>
            <span className={styles.progressStep}>Step {step + 1} of {STEPS.length}</span>
            <span className={styles.progressPct}>{progressPct}% Complete</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
          </div>
        </header>

        <div className={styles.panelContent} key={step}>
          {step === 0 && renderBasicInfo()}
          {step === 1 && renderSelectRole()}
          {step === 2 && renderRoleDetails()}
        </div>
      </section>
    </main>
  );
};

export default Register;
