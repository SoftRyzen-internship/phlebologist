import { MetadataRoute } from 'next';
import { getDictionary } from '@/utils/dictionary';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lang = ['en', 'ua'];
  const { page } = await getDictionary('en');
  const AllTreatment = page.treatment;

  const home = lang.map(lan => ({
    url: `https://doctor-voitsitskyi.com.ua/${lan}`,
    lastModified: new Date(),
    priority: 1,
  }));

  const treatmentLink = Object.keys(AllTreatment).map(id => `/treatment/${id}`);
  const treatment = treatmentLink
    .map(link => {
      const href = lang.map(lan => ({
        url: `https://doctor-voitsitskyi.com.ua/${lan}${link}`,
        lastModified: new Date(),
        priority: 0.8,
      }));
      return [...href];
    })
    .flat();

  return [...home, ...treatment];
}
