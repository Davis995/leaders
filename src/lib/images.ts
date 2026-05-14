// Unsplash image URLs used across the iLead site.
// Using Unsplash's public source URLs with size params.
const u = (id: string, w = 1200, h = 1500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const IMG = {
  heroPortrait1: u("photo-1531123897727-8f129e1688ce", 800, 1000), // young leader
  heroPortrait2: u("photo-1573496359142-b8d87734a5a2", 800, 1000), // confident woman
  heroPortrait3: u("photo-1494790108377-be9c29b29330", 800, 1000), // smiling woman
  heroPortrait4: u("photo-1500648767791-00dcc994a43e", 800, 1000), // confident man
  mentorship: u("photo-1522202176988-66273c2fd55f", 1400, 1000),    // group meeting
  workshop: u("photo-1543269865-cbf427effbad", 1400, 1000),         // workshop
  speaking: u("photo-1475721027785-f74eccf877e2", 1400, 1000),      // speaker stage
  cohort: u("photo-1517245386807-bb43f82c33c4", 1400, 1000),        // students laptop
  growth: u("photo-1524178232363-1fb2b075b655", 1400, 1000),        // classroom
  community: u("photo-1529390079861-591de354faf5", 1400, 1000),     // community
  gallery1: u("photo-1559223607-a43c990c692c", 800, 1000),
  gallery2: u("photo-1517048676732-d65bc937f952", 800, 600),
  gallery3: u("photo-1531545514256-b1400bc00f31", 800, 1000),
  gallery4: u("photo-1542744173-8e7e53415bb0", 800, 700),
  gallery5: u("photo-1556761175-5973dc0f32e7", 800, 1100),
  gallery6: u("photo-1559027615-cd4628902d4a", 800, 800),
  blog1: u("photo-1573164713714-d95e436ab8d6", 1000, 700),
  blog2: u("photo-1521737604893-d14cc237f11d", 1000, 700),
  blog3: u("photo-1517960413843-0aee8e2b3285", 1000, 700),
};