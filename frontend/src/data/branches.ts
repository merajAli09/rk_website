export interface Branch {
  slug: string;
  name: string;
  orderLabel: string;
  address: string[];
  phones: string[];
  timings: string[];
  ladiesOnly?: {
    time: string;
    label: string;
    trainer: string;
  };
  image: string;
  gallery: string[];
  features: string[];
  instagramUrl: string;
  mapEmbedUrl: string;
  directionsUrl: string;
}

export interface PricePlan {
  id: string;
  name: string;
  price: string;
  note: string;
  badge?: string;
}

const mapLinks = (address: string[]) => {
  const query = encodeURIComponent(address.join(", "));
  return {
    mapEmbedUrl: `https://www.google.com/maps?q=${query}&output=embed`,
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${query}`,
  };
};

const gymImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1678967633223-050cf8e1c55c?auto=format&fit=crop&w=1200&q=85",
];

const dumbbellRackImages = [
  "https://images.unsplash.com/photo-1590239926079-ffde4959f91d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1590239926044-4131f5d0654d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1590240091983-b3f0df925dc7?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1646656130630-07af3a262a9b?auto=format&fit=crop&w=1400&q=85",
];

const branchImageOverrides: Record<string, string> = {
  guddimalkapur: dumbbellRackImages[0],
  nampally: dumbbellRackImages[1],
};

const suppliedGalleryImages = [
  "https://customer-assets-lqy194kg.emergentagent.net/job_rk-strength-hub-1/artifacts/h2av1zx4_8ed14777-0c96-4c56-97bc-51143c582cb3.JPG",
  "https://customer-assets-lqy194kg.emergentagent.net/job_rk-strength-hub-1/artifacts/o8bz4dv5_3027a035-0578-4140-949c-4f9b230f7c1a.JPG",
  "https://customer-assets-lqy194kg.emergentagent.net/job_rk-strength-hub-1/artifacts/8vdp3q6f_a5407e81-a54b-47c0-8de5-153d3b9b8ae8.JPG",
  "https://customer-assets-lqy194kg.emergentagent.net/job_rk-strength-hub-1/artifacts/nepq286k_b76e8290-aada-43c6-9c61-7669c04670b4.JPG",
  "https://customer-assets-lqy194kg.emergentagent.net/job_rk-strength-hub-1/artifacts/mvwiuetj_b686cd37-a1e2-462a-adf6-e2e420ef054c.JPG",
  "https://customer-assets-lqy194kg.emergentagent.net/job_rk-strength-hub-1/artifacts/5845uvrx_4a88d7dd-f27c-4218-b9a5-ee359aa1d113.JPG",
  "https://customer-assets-lqy194kg.emergentagent.net/job_rk-strength-hub-1/artifacts/u1cxhgnt_6e9bfae4-d256-4d36-ba17-34d629acb2c3.JPG",
];

const branchGalleryOverrides: Record<string, string[]> = {
  guddimalkapur: [suppliedGalleryImages[0], suppliedGalleryImages[3]],
  nampally: [suppliedGalleryImages[1]],
  "begum-bazar": [suppliedGalleryImages[2]],
  "asif-nagar": [suppliedGalleryImages[4]],
  mangalhat: [suppliedGalleryImages[6]],
  puranapul: [suppliedGalleryImages[5]],
};

const standardTimings = ["6:00 AM – 12:00 PM", "4:00 PM – 11:00 PM"];

const branchSeed = [
  {
    slug: "mangalhat",
    name: "Mangalhat",
    orderLabel: "First Branch",
    address: ["14-1-187/C,", "Sitarampet,", "Mangalhat, Hyderabad,", "Telangana 500006"],
    phones: ["9059389888", "9346353933"],
    instagramUrl: "https://www.instagram.com/rkfitnessmangalhat?stkn=eXVhYjJnd3UzbG0z",
    features: ["Bodybuilding zone", "Free weights", "Conditioning area", "Trainer assistance"],
  },
  {
    slug: "begum-bazar",
    name: "Begum Bazar",
    orderLabel: "Second Branch",
    address: ["503, 73,", "Above Seven Heaven Hotel,", "Fish Market,", "Begum Bazar,", "Hyderabad, Telangana 500012"],
    phones: ["9133911556", "9296050027"],
    instagramUrl: "https://www.instagram.com/rk_fitness_begumbazar?stkn=NWIydHdnMHdvaHAx",
    features: ["Multi-station racks", "Serious lifting floor", "Dedicated PT zone", "Spacious layout"],
  },
  {
    slug: "asif-nagar",
    name: "Asif Nagar",
    orderLabel: "Third Branch",
    address: ["Besides Success School,", "H.No 12-1-863/1,", "Sri Damayanthi Chamber,", "Police Station Rd,", "Asif Nagar, Hyderabad,", "Telangana 500006"],
    phones: ["9133911556", "9296050027"],
    instagramUrl: "https://www.instagram.com/rk.fitness.asifnagar?stkn=MWt5Z2k2dXhhaTdhdg==",
    ladiesOnly: {
      time: "12:00 PM – 4:00 PM",
      label: "Exclusively for ladies",
      trainer: "Ladies trainer available during this session",
    },
    features: ["Functional training", "Power racks", "Cardio floor", "Personal training"],
  },
  {
    slug: "puranapul",
    name: "Puranapul",
    orderLabel: "Fourth Branch",
    address: ["13-3-389/3/B,", "X Road, Durga Nagar,", "Venkateswara Nagar,", "Puranapul, Hyderabad,", "Telangana 500006"],
    phones: ["9059389888", "9346353933"],
    instagramUrl: "https://www.instagram.com/rkfitnesspuranapool?stkn=Z3VlN2VpazJsYWh1",
    features: ["Strength training", "Cable machines", "Fat loss conditioning", "Workout bay"],
  },
  {
    slug: "guddimalkapur",
    name: "Guddimalkapur",
    orderLabel: "Fifth Branch",
    address: ["Beside Kabbadi Stadium,", "Markandeya Nagar, Talla Gadda,", "Guddimalkapur, Hyderabad,", "Telangana 500006"],
    phones: ["9133911556", "9296050027"],
    instagramUrl: "https://www.instagram.com/rk_fitness_guddimalkapur?stkn=MTIyMmhzdTAybTIzcA==",
    features: ["Heavy strength zone", "Cardio floor", "Modern equipment", "Trainer assistance"],
  },
  {
    slug: "nampally",
    name: "Nampally",
    orderLabel: "Sixth Branch",
    address: ["Ek Minar Masjid,", "Sri Balaji Enclave,", "Ghosha Mahal,", "Nampally, Hyderabad,", "Telangana 500001"],
    phones: ["9059389888", "9346353933"],
    instagramUrl: "https://www.instagram.com/rk.fitness.nampally?stkn=amdrY2lnaG9uenAx",
    features: ["Hypertrophy suite", "Cardio equipment", "Strength floor", "Changing facilities"],
  },
];

export const BRANCHES: Branch[] = branchSeed.map((branch, index) => {
  const links = mapLinks(branch.address);
  const image = branchImageOverrides[branch.slug] ?? gymImages[index % gymImages.length];
  return {
    ...branch,
    timings: standardTimings,
    image,
    gallery: branchGalleryOverrides[branch.slug] ?? [],
    ...links,
  };
});

export const PRICING: PricePlan[] = [
  { id: "monthly", name: "Monthly", price: "₹1,800", note: "per month" },
  { id: "three-months", name: "3 Months", price: "₹4,500", note: "full access" },
  { id: "six-months", name: "6 Months", price: "₹7,500", note: "full access" },
  { id: "yearly", name: "Yearly", price: "₹14,000", note: "best value", badge: "BEST VALUE" },
  { id: "day-pass", name: "Day Pass", price: "₹200", note: "per visit" },
];

export const SERVICES = [
  { title: "Strength Training", copy: "Build a stronger base with serious equipment and room to work.", image: gymImages[0] },
  { title: "Cardio", copy: "Raise your engine with a focused cardio floor and clear purpose.", image: gymImages[2] },
  { title: "Personal Training", copy: "Get practical guidance built around your goals and consistency.", image: gymImages[1] },
  { title: "Weight Loss", copy: "Train with structure, intensity and the support to keep moving.", image: gymImages[3] },
  { title: "Bodybuilding", copy: "A focused environment for hypertrophy, discipline and progress.", image: gymImages[4] },
];

export const GALLERY_IMAGES = suppliedGalleryImages;

export const TRAINER_PLACEHOLDERS = [
  { role: "Strength & conditioning", image: gymImages[1], label: "Trainer profile placeholder 01" },
  { role: "Fitness & hypertrophy", image: gymImages[2], label: "Trainer profile placeholder 02" },
  { role: "Bodybuilding coaching", image: gymImages[3], label: "Trainer profile placeholder 03" },
  { role: "Fat loss & conditioning", image: gymImages[4], label: "Trainer profile placeholder 04" },
];

export const INTEREST_OPTIONS = [
  "Monthly Membership",
  "3 Month Membership",
  "6 Month Membership",
  "Yearly Membership",
  "Day Pass",
  "Personal Training",
  "Weight Loss",
  "Bodybuilding",
  "General Enquiry",
];
