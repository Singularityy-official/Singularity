import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, keywords, canonical, ogImage }: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
// Blocca Netlify dall'essere indicizzato
if (window.location.hostname.includes('netlify.app')) {
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    document.head.appendChild(metaRobots);
  }
  metaRobots.setAttribute('content', 'noindex, nofollow');
}

    // Update keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL if provided
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph meta tags
    const updateOGMeta = (property: string, content: string) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    };

    updateOGMeta('og:title', title);
    updateOGMeta('og:description', description);
    updateOGMeta('og:url', canonical || 'https://singularitydream.it/');
    updateOGMeta('og:type', 'website');
updateOGMeta('og:site_name', 'Singularity Dream');
    if (ogImage) {
      updateOGMeta('og:image', ogImage);
    }

    // Twitter Card meta tags
    const updateTwitterMeta = (name: string, content: string) => {
      let twitterMeta = document.querySelector(`meta[name="${name}"]`);
      if (!twitterMeta) {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('name', name);
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.setAttribute('content', content);
    };

    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);
    if (ogImage) {
      updateTwitterMeta('twitter:image', ogImage);
    }

    // Structured Data - JSON-LD Schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Singularity Dream",
      "url": "https://singularitydream.it",
      "logo": "https://singularitydream.it/logo.png",
      "image": "https://singularitydream.it/cover.jpg",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IT",
        "addressLocality": "Italia"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+39 333 1234567",
        "contactType": "customer support",
        "areaServed": "IT"
      },
      "sameAs": [
        "https://www.trustpilot.com/review/singularitydream.it"
      ]
    };

    // Rimuove script vecchio (se già presente)
    const existingJsonLd = document.getElementById("seo-json-ld");
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    // Inserisce lo script JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "seo-json-ld";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEOHead;
