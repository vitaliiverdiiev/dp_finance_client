declare module '*.svg?react' {
  import React, { SVGProps } from 'react';

  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg?source' {
  import { StaticImageData } from 'next/image';
  const StaticImage: StaticImageData;
  export default StaticImage;
}
