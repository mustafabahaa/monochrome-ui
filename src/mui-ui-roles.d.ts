import '@mui/material/Avatar';
import '@mui/material/Button';
import '@mui/material/Chip';
import '@mui/material/Paper';
import '@mui/material/Typography';

declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    mediaPlaceholder: true;
    mediaFallbackLarge: true;
    mediaFallbackCompact: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    largeOutlinedAction: true;
    quietAction: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    inverseTag: true;
    inverseAlertTag: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    mediaSurface: true;
    mediaThumbnail: true;
    contentPanel: true;
    insetPanel: true;
    mediaFrame: true;
    monochromeMedia: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pageHeading: true;
    sectionHeading: true;
    sectionDescription: true;
    metadataLabel: true;
    monospaceValue: true;
    itemTitle: true;
    brandName: true;
    screenHeading: true;
    brandMark: true;
    bodyNote: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    pageHeading: React.CSSProperties;
    sectionHeading: React.CSSProperties;
    sectionDescription: React.CSSProperties;
    metadataLabel: React.CSSProperties;
    monospaceValue: React.CSSProperties;
    itemTitle: React.CSSProperties;
    brandName: React.CSSProperties;
    screenHeading: React.CSSProperties;
    brandMark: React.CSSProperties;
    bodyNote: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    pageHeading?: React.CSSProperties;
    sectionHeading?: React.CSSProperties;
    sectionDescription?: React.CSSProperties;
    metadataLabel?: React.CSSProperties;
    monospaceValue?: React.CSSProperties;
    itemTitle?: React.CSSProperties;
    brandName?: React.CSSProperties;
    screenHeading?: React.CSSProperties;
    brandMark?: React.CSSProperties;
    bodyNote?: React.CSSProperties;
  }
}
