/**
 * VisaIQ — Complete Occupation List
 * All MLTSSL + key STSOL occupations for 2025-26
 * Used by: tool.html, points-calculator.html, eoi-queue.html, student-pathway.html, profile page
 *
 * Usage: <script src="/occupations.js"></script>
 * Then access: window.VISAIQ_OCCUPATIONS (array) or window.VISAIQ_OCC_MAP (keyed by id)
 */

window.VISAIQ_OCCUPATIONS = [

  // ── HEALTHCARE – TIER 1 ──────────────────────────────────────────
  { id:'general_practitioner',       label:'General Practitioner (GP)',              anzsco:'253111', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'resident_medical_officer',   label:'Resident Medical Officer',               anzsco:'253112', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'medical_specialist',         label:'Medical Specialist (Cardiologist etc)',  anzsco:'253999', list:'MLTSSL', tier:1, cutoff189:70,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'psychiatrist',               label:'Psychiatrist',                           anzsco:'253411', list:'MLTSSL', tier:1, cutoff189:70,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'surgeon',                    label:'Surgeon (General)',                      anzsco:'253511', list:'MLTSSL', tier:1, cutoff189:70,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'anaesthetist',               label:'Anaesthetist',                           anzsco:'253211', list:'MLTSSL', tier:1, cutoff189:70,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'paediatrician',              label:'Paediatrician',                          anzsco:'253321', list:'MLTSSL', tier:1, cutoff189:70,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'obstetrician',               label:'Obstetrician / Gynaecologist',           anzsco:'253311', list:'MLTSSL', tier:1, cutoff189:70,  cutoff190:65, assess:'AMC',    cat:'Healthcare' },
  { id:'registered_nurse',           label:'Registered Nurse (General)',             anzsco:'254416', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'nurse_practitioner',         label:'Nurse Practitioner',                     anzsco:'254411', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'midwife',                    label:'Midwife',                                anzsco:'254111', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'enrolled_nurse',             label:'Enrolled Nurse',                         anzsco:'411411', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'dentist',                    label:'Dentist',                                anzsco:'252311', list:'MLTSSL', tier:1, cutoff189:80,  cutoff190:65, assess:'ADC',    cat:'Healthcare' },
  { id:'dental_specialist',          label:'Dental Specialist (Orthodontist etc)',   anzsco:'252312', list:'MLTSSL', tier:1, cutoff189:80,  cutoff190:65, assess:'ADC',    cat:'Healthcare' },
  { id:'physiotherapist',            label:'Physiotherapist',                        anzsco:'252511', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'occupational_therapist',     label:'Occupational Therapist',                 anzsco:'252411', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'pharmacist',                 label:'Pharmacist',                             anzsco:'251511', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'optometrist',                label:'Optometrist',                            anzsco:'251411', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'speech_pathologist',         label:'Speech Pathologist',                     anzsco:'252711', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'SPA',    cat:'Healthcare' },
  { id:'podiatrist',                 label:'Podiatrist',                             anzsco:'252611', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'osteopath',                  label:'Osteopath',                              anzsco:'252312', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'chiropractor',               label:'Chiropractor',                           anzsco:'252111', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'medical_radiation_tech',     label:'Medical Radiation Technologist',         anzsco:'251211', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'sonographer',                label:'Sonographer',                            anzsco:'251214', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'ASAR',   cat:'Healthcare' },
  { id:'paramedic',                  label:'Paramedic',                              anzsco:'411311', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'radiographer',               label:'Radiographer',                           anzsco:'251211', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },
  { id:'medical_lab_scientist',      label:'Medical Laboratory Scientist',           anzsco:'234611', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AIMS',   cat:'Healthcare' },
  { id:'audiologist',                label:'Audiologist',                            anzsco:'251911', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'Aud Aus',cat:'Healthcare' },
  { id:'dietitian',                  label:'Dietitian',                              anzsco:'251111', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'DAA',    cat:'Healthcare' },
  { id:'aged_care_worker',           label:'Aged / Disability Care Worker',          anzsco:'423111', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AHPRA',  cat:'Healthcare' },

  // ── EDUCATION – TIER 2 ───────────────────────────────────────────
  { id:'early_childhood_teacher',    label:'Early Childhood Teacher',                anzsco:'241111', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'AITSL',  cat:'Education' },
  { id:'primary_teacher',            label:'Primary School Teacher',                 anzsco:'241213', list:'MLTSSL', tier:2, cutoff189:85,  cutoff190:65, assess:'AITSL',  cat:'Education' },
  { id:'secondary_teacher',          label:'Secondary School Teacher (General)',     anzsco:'241411', list:'MLTSSL', tier:2, cutoff189:85,  cutoff190:65, assess:'AITSL',  cat:'Education' },
  { id:'secondary_teacher_maths',    label:'Secondary Teacher — Maths / Science',   anzsco:'241411', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'AITSL',  cat:'Education' },
  { id:'secondary_teacher_english',  label:'Secondary Teacher — English',            anzsco:'241411', list:'MLTSSL', tier:2, cutoff189:85,  cutoff190:65, assess:'AITSL',  cat:'Education' },
  { id:'special_ed_teacher',         label:'Special Education Teacher',              anzsco:'241511', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'AITSL',  cat:'Education' },
  { id:'vet_trainer',                label:'VET / TAFE Trainer and Assessor',        anzsco:'242111', list:'MLTSSL', tier:2, cutoff189:85,  cutoff190:65, assess:'VETASSESS',cat:'Education'},
  { id:'psychologist',               label:'Psychologist',                           anzsco:'272311', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'AHPRA',  cat:'Education' },
  { id:'counsellor',                 label:'Counsellor',                             anzsco:'272111', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'VETASSESS',cat:'Education'},
  { id:'social_worker',              label:'Social Worker',                          anzsco:'272511', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'AASW',   cat:'Education' },
  { id:'welfare_worker',             label:'Welfare / Community Worker',             anzsco:'411711', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'ACWA',   cat:'Education' },

  // ── ENGINEERING – TIER 3 ─────────────────────────────────────────
  { id:'civil_engineer',             label:'Civil Engineer',                         anzsco:'233211', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'structural_engineer',        label:'Structural Engineer',                    anzsco:'233214', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'geotechnical_engineer',      label:'Geotechnical Engineer',                  anzsco:'233212', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'transport_engineer',         label:'Transport / Traffic Engineer',           anzsco:'233215', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'electrical_engineer',        label:'Electrical Engineer',                    anzsco:'233311', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'electronics_engineer',       label:'Electronics Engineer',                   anzsco:'233411', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'mechanical_engineer',        label:'Mechanical Engineer',                    anzsco:'233512', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'chemical_engineer',          label:'Chemical Engineer',                      anzsco:'233111', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'industrial_engineer',        label:'Industrial / Manufacturing Engineer',    anzsco:'233511', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'environmental_engineer',     label:'Environmental Engineer',                 anzsco:'233915', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'mining_engineer',            label:'Mining Engineer',                        anzsco:'233611', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'petroleum_engineer',         label:'Petroleum Engineer',                     anzsco:'233612', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'biomedical_engineer',        label:'Biomedical Engineer',                    anzsco:'233913', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'aeronautical_engineer',      label:'Aeronautical Engineer',                  anzsco:'233911', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'naval_architect',            label:'Naval Architect',                        anzsco:'233916', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'construction_pm',            label:'Construction Project Manager',           anzsco:'133111', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'AIPM',   cat:'Engineering' },
  { id:'quantity_surveyor',          label:'Quantity Surveyor',                      anzsco:'233213', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'AIQS',   cat:'Engineering' },
  { id:'land_surveyor',              label:'Land Surveyor',                          anzsco:'232212', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'SSSI',   cat:'Engineering' },
  { id:'architect',                  label:'Architect',                              anzsco:'232111', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'AACA',   cat:'Engineering' },
  { id:'landscape_architect',        label:'Landscape Architect',                    anzsco:'232112', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'AILA',   cat:'Engineering' },
  { id:'urban_planner',              label:'Urban and Regional Planner',             anzsco:'232611', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'PIA',    cat:'Engineering' },
  { id:'geologist',                  label:'Geologist / Geophysicist',               anzsco:'234411', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'Engineers Aus', cat:'Engineering' },
  { id:'environmental_scientist',    label:'Environmental / Conservation Scientist', anzsco:'234313', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:70, assess:'VETASSESS',cat:'Engineering'},

  // ── TRADES – TIER 3 ──────────────────────────────────────────────
  { id:'electrician',                label:'Electrician (General)',                  anzsco:'341111', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'electrical_linesworker',     label:'Electrical Linesworker',                 anzsco:'342211', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'plumber',                    label:'Plumber (General)',                      anzsco:'334111', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'gasfitter',                  label:'Gasfitter',                              anzsco:'334112', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'carpenter',                  label:'Carpenter / Joiner',                     anzsco:'331212', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'bricklayer',                 label:'Bricklayer',                             anzsco:'331111', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'plasterer',                  label:'Plasterer',                              anzsco:'333211', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'painting_trades',            label:'Painting Trades Worker',                 anzsco:'333111', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'floor_finisher',             label:'Floor Finisher',                         anzsco:'332211', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'roof_tiler',                 label:'Roof Tiler',                             anzsco:'333311', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'wall_tiler',                 label:'Wall and Floor Tiler',                   anzsco:'333211', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'refrigeration_mechanic',     label:'Refrigeration and Air Conditioning Mechanic', anzsco:'342111', list:'MLTSSL', tier:3, cutoff189:65, cutoff190:65, assess:'TRA', cat:'Trades' },
  { id:'sheet_metal_worker',         label:'Sheet Metal Worker',                     anzsco:'322311', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'welder',                     label:'Welder (First Class)',                   anzsco:'322311', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'boilermaker',                label:'Boilermaker',                            anzsco:'322111', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'fitter_machinist',           label:'Fitter and Machinist',                   anzsco:'323211', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'toolmaker',                  label:'Toolmaker',                              anzsco:'323312', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'motor_mechanic',             label:'Motor Mechanic (General)',               anzsco:'321211', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'diesel_mechanic',            label:'Diesel Motor Mechanic',                  anzsco:'321212', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'cabinetmaker',               label:'Cabinetmaker',                           anzsco:'394111', list:'MLTSSL', tier:3, cutoff189:65,  cutoff190:65, assess:'TRA',    cat:'Trades' },
  { id:'butcher',                    label:'Butcher / Smallgoods Maker',             anzsco:'351111', list:'STSOL',  tier:null,cutoff189:null,cutoff190:65, assess:'TRA',   cat:'Trades' },

  // ── ICT / TECHNOLOGY – TIER 4 ────────────────────────────────────
  { id:'software_engineer',          label:'Software Engineer',                      anzsco:'261313', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'software_developer',         label:'Software / Applications Developer',      anzsco:'261312', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'cybersecurity_analyst',      label:'Cybersecurity Analyst / Specialist',     anzsco:'262112', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:80, assess:'ACS',    cat:'ICT' },
  { id:'network_engineer',           label:'Network / Systems Engineer',             anzsco:'263111', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'database_admin',             label:'Database Administrator',                 anzsco:'262111', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'ict_manager',                label:'ICT Manager',                            anzsco:'135111', list:'MLTSSL', tier:4, cutoff189:95,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'systems_analyst',            label:'Systems Analyst',                        anzsco:'261111', list:'MLTSSL', tier:4, cutoff189:95,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'ict_project_manager',        label:'ICT Project Manager',                    anzsco:'135112', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'data_scientist',             label:'Data Scientist / Analyst',               anzsco:'224211', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'ai_ml_engineer',             label:'AI / Machine Learning Engineer',         anzsco:'261313', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'devops_engineer',            label:'DevOps / Cloud Engineer',                anzsco:'263111', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'ux_designer',                label:'UX / UI Designer',                       anzsco:'232414', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:85, assess:'ACS',    cat:'ICT' },
  { id:'ict_security_specialist',    label:'ICT Security Specialist',                anzsco:'262112', list:'MLTSSL', tier:4, cutoff189:90,  cutoff190:80, assess:'ACS',    cat:'ICT' },
  { id:'telecommunications_eng',     label:'Telecommunications Engineer',            anzsco:'263211', list:'MLTSSL', tier:4, cutoff189:85,  cutoff190:80, assess:'Engineers Aus', cat:'ICT' },
  { id:'electronics_tech',           label:'Electronics / Telecommunications Technician', anzsco:'342414', list:'MLTSSL', tier:3, cutoff189:70, cutoff190:65, assess:'TRA', cat:'ICT' },

  // ── ACCOUNTING / FINANCE – TIER 4 ────────────────────────────────
  { id:'accountant',                 label:'Accountant (General)',                   anzsco:'221111', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:65, assess:'CPA/CAANZ',cat:'Accounting' },
  { id:'management_accountant',      label:'Management Accountant',                  anzsco:'221112', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:65, assess:'CPA/CAANZ',cat:'Accounting' },
  { id:'taxation_accountant',        label:'Taxation Accountant',                    anzsco:'221113', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:65, assess:'CPA/CAANZ',cat:'Accounting' },
  { id:'external_auditor',           label:'External Auditor',                       anzsco:'221213', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:65, assess:'CPA/CAANZ',cat:'Accounting' },
  { id:'internal_auditor',           label:'Internal Auditor',                       anzsco:'221214', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:65, assess:'CPA/CAANZ',cat:'Accounting' },
  { id:'finance_manager',            label:'Finance Manager',                        anzsco:'132111', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:65, assess:'CPA/CAANZ',cat:'Accounting' },
  { id:'financial_analyst',          label:'Financial Analyst / Investment Analyst', anzsco:'222111', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:65, assess:'VETASSESS',cat:'Accounting'},
  { id:'actuary',                    label:'Actuary',                                anzsco:'224111', list:'MLTSSL', tier:4, cutoff189:85,  cutoff190:65, assess:'IAA',    cat:'Accounting' },

  // ── SCIENCE ──────────────────────────────────────────────────────
  { id:'chemist',                    label:'Chemist',                                anzsco:'234111', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:65, assess:'RACI',   cat:'Science' },
  { id:'physicist',                  label:'Physicist',                              anzsco:'234511', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:65, assess:'AIP',    cat:'Science' },
  { id:'botanist',                   label:'Botanist / Ecologist',                   anzsco:'234911', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:65, assess:'VETASSESS',cat:'Science'},
  { id:'food_technologist',          label:'Food Technologist',                      anzsco:'234212', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:65, assess:'VETASSESS',cat:'Science'},
  { id:'metallurgist',               label:'Metallurgist / Materials Engineer',      anzsco:'234911', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:65, assess:'Engineers Aus', cat:'Science' },
  { id:'statistician',               label:'Statistician',                           anzsco:'224213', list:'MLTSSL', tier:3, cutoff189:85,  cutoff190:65, assess:'SSA',    cat:'Science' },
  { id:'veterinarian',               label:'Veterinarian',                           anzsco:'234711', list:'MLTSSL', tier:1, cutoff189:75,  cutoff190:65, assess:'AVA',    cat:'Science' },

  // ── BUSINESS / MANAGEMENT ────────────────────────────────────────
  { id:'management_consultant',      label:'Management Consultant',                  anzsco:'224711', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:70, assess:'VETASSESS',cat:'Business'},
  { id:'hr_manager',                 label:'Human Resource Manager',                 anzsco:'132311', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:70, assess:'VETASSESS',cat:'Business'},
  { id:'recruitment_consultant',     label:'Recruitment Consultant',                 anzsco:'223112', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:70, assess:'VETASSESS',cat:'Business'},
  { id:'marketing_specialist',       label:'Marketing Specialist',                   anzsco:'225113', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:70, assess:'VETASSESS',cat:'Business'},
  { id:'supply_chain_manager',       label:'Supply Chain / Logistics Manager',       anzsco:'133611', list:'MLTSSL', tier:4, cutoff189:null,cutoff190:70, assess:'VETASSESS',cat:'Business'},

  // ── HOSPITALITY (STSOL) ──────────────────────────────────────────
  { id:'chef',                       label:'Cook / Chef (any level)',                anzsco:'351311', list:'STSOL',  tier:null,cutoff189:null,cutoff190:65, assess:'TRA',   cat:'Hospitality' },
  { id:'pastrycook',                 label:'Pastrycook',                             anzsco:'351112', list:'STSOL',  tier:null,cutoff189:null,cutoff190:65, assess:'TRA',   cat:'Hospitality' },
  { id:'hotel_manager',              label:'Hotel / Motel Manager',                  anzsco:'141311', list:'STSOL',  tier:null,cutoff189:null,cutoff190:65, assess:'VETASSESS',cat:'Hospitality'},
  { id:'cafe_manager',               label:'Café / Restaurant Manager',              anzsco:'141111', list:'STSOL',  tier:null,cutoff189:null,cutoff190:65, assess:'VETASSESS',cat:'Hospitality'},

  // ── OTHER ────────────────────────────────────────────────────────
  { id:'social_worker_other',        label:'Community Development Worker',           anzsco:'411211', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'ACWA',   cat:'Community' },
  { id:'disability_worker',          label:'Disability Support Worker',              anzsco:'423111', list:'MLTSSL', tier:2, cutoff189:80,  cutoff190:65, assess:'ACWA',   cat:'Community' },
  { id:'interpreter',                label:'Interpreter / Translator',               anzsco:'272413', list:'MLTSSL', tier:3, cutoff189:80,  cutoff190:65, assess:'NAATI',  cat:'Community' },
];

/* ── LOOKUP MAP ─────────────────────────────────────────────────── */
window.VISAIQ_OCC_MAP = {};
window.VISAIQ_OCCUPATIONS.forEach(function(o) {
  window.VISAIQ_OCC_MAP[o.id] = o;
});

/* ── HELPER: Build <optgroup> select HTML ────────────────────────
   Usage: document.getElementById('mySelect').innerHTML = VIQ.selectHTML();
   Or with a selected value: VIQ.selectHTML('registered_nurse')
────────────────────────────────────────────────────────────────── */
window.VIQ = {
  selectHTML: function(selectedId) {
    var cats = {};
    window.VISAIQ_OCCUPATIONS.forEach(function(o) {
      if (!cats[o.cat]) cats[o.cat] = [];
      cats[o.cat].push(o);
    });
    var html = '<option value="">Select your occupation…</option>';
    var catOrder = ['Healthcare','Education','Engineering','Trades','ICT','Accounting','Science','Business','Hospitality','Community'];
    catOrder.forEach(function(cat) {
      if (!cats[cat]) return;
      html += '<optgroup label="' + cat + '">';
      cats[cat].forEach(function(o) {
        var sel = (selectedId && o.id === selectedId) ? ' selected' : '';
        html += '<option value="' + o.id + '"' + sel + '>' + o.label + '</option>';
      });
      html += '</optgroup>';
    });
    return html;
  },

  /* Get occupation data by id */
  get: function(id) {
    return window.VISAIQ_OCC_MAP[id] || null;
  },

  /* Filter by category */
  byCategory: function(cat) {
    return window.VISAIQ_OCCUPATIONS.filter(function(o) { return o.cat === cat; });
  },

  /* Filter MLTSSL only */
  mltssl: function() {
    return window.VISAIQ_OCCUPATIONS.filter(function(o) { return o.list === 'MLTSSL'; });
  }
};
