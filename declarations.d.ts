import 'react';

declare module 'colorthief';

declare module 'react' {
  interface CSSProperties {
    '--experienceColor'?: string;
  }
}
