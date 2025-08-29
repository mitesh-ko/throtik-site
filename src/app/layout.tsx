import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    // Set the canonical URL for your entire site.
    metadataBase: new URL("https://throtik.com"),
    alternates: {
        canonical: '/',
    },

    // A powerful, benefit-driven title. The template is for other pages.
    title: {
        default: "Throtik: Custom Software & Web Application Development",
        template: "%s | Throtik",
    },

    // This description is your sales pitch on Google. It focuses on client benefits.
    description:
        "Throtik is a premier software development company specializing in building scalable web applications, SaaS platforms, and custom software solutions that drive business growth and efficiency.",

    // Keywords are now service-focused to attract clients, not recruiters.
    keywords: [
        "Custom Software Development",
        "Web Application Development",
        "SaaS Development Company",
        "Enterprise Software Solutions",
        "UI/UX Design Services",
        "Cloud Application Development",
        "Software Development India",
        "Hire Software Developers",
    ],

    // Clearly define the author/company.
    authors: [{ name: "Throtik Software Solutions", url: "https://throtik.com" }],
    creator: "Throtik Software Solutions",
    publisher: "Throtik Software Solutions",

    // --- Open Graph (for Social Sharing on LinkedIn, Facebook, etc.) ---
    openGraph: {
        title: "Throtik: Driving Business Growth with Custom Software",
        description:
            "Partner with Throtik to build high-performance, scalable software solutions tailored to your unique business needs. Let's build the future, together.",
        url: "https://throtik.com",
        siteName: "Throtik",
        images: [
            {
                // IMPORTANT: Create and upload a professional OG image.
                url: "/og-image.png", // Path relative to your public folder
                width: 1200,
                height: 630,
                alt: "Throtik - Custom Software Development Company",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    // --- Twitter Card (for Sharing on Twitter) ---
    twitter: {
        card: "summary_large_image",
        title: "Throtik: Custom Software & Web Application Development",
        description: "Building scalable web apps, SaaS platforms, and custom software to drive business growth. Discover how Throtik can elevate your technology.",
        // The 'images' array from openGraph will be used automatically by Twitter
        // You can specify a different image here if you want:
        // images: ["https://throtik.com/twitter-image.png"],
    },

    // --- Icons & Manifest ---
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest", // Good for PWA capabilities

    // --- Search Engine Indexing Rules ---
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization', // Use 'LocalBusiness' if you have a physical office clients can visit
    name: 'Throtik',
    url: 'https://throtik.com',
    logo: 'https://throtik.com/logo.png', // IMPORTANT: Create and link to your logo
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-832-067-2705', // Add your business phone number
        contactType: 'customer service', // Or 'technical support', 'sales'
    },
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gujarat Housing',
        addressLocality: 'Surat',
        addressRegion: 'GJ',
        postalCode: '395010',
        addressCountry: 'IN'
    },
    sameAs: [
        // IMPORTANT: Add your company's social media profile URLs
        'https://github.com/throtik',
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
