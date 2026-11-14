import { Helmet } from "react-helmet-async";

// Per-route meta. Canonical/og:url are omitted until the confirmed production
// domain is live (mogulmakeracademy.com is currently down).
export const Seo = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    <meta name="twitter:title" content={title} />
    {description && <meta name="twitter:description" content={description} />}
  </Helmet>
);
