import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import LanguageContext from '@contexts/shared/contexts/language-context';

// eslint-disable-next-line react/require-default-props
function Bullet({ className }: { className?: string }) {
  return (
    <span
      className={`w-1 h-1 bg-gray-700 rounded-full absolute ${className}`}
      style={{ right: '-8px', top: 'calc(50% - 1px)' }}
    />
  );
}

function ProfessionalRoad() {
  const {
    metadata: { professionalRoad },
  } = useContext(LanguageContext);

  return (
    <Container as="section" sub>
      <Text heading as="h2" className="text-white text-2xl">
        {professionalRoad.title}
      </Text>
      <Text as="p" className="text-gray-300 mt-1 mb-3">
        {professionalRoad.description}
      </Text>

      <div className="rounded-lg border border-solid border-gray-600 overflow-hidden">
        <img
          src="/images/street-photo-sm.png"
          alt={professionalRoad.mosaicAltText}
          className="hidden sm:block"
        />
        <img
          src="/images/street-photo-xs.png"
          alt={professionalRoad.mosaicAltText}
          className="block sm:hidden"
        />
      </div>

      <ul className="gap-3 flex flex-wrap text-sm mt-2 sm:grid-cols-8 text-gray-700 justify-center cursor-default">
        <li className="text-center relative">
          Boulevard
          <Bullet />
        </li>
        <li className="text-center relative">
          Origin
          <Bullet />
        </li>
        <li className="text-center relative">
          Itaú
          <Bullet />
        </li>
        <li className="text-center relative">
          PagSeguro
          <Bullet />
        </li>
        <li className="text-center relative">
          Netbiis
          <Bullet className="hidden sm:block" />
        </li>
        <li className="text-center relative">
          RMC Brothers
          <Bullet />
        </li>
        <li className="text-center relative">
          Plaay
          <Bullet />
        </li>
        <li className="text-center">Foster</li>
      </ul>
    </Container>
  );
}

export default ProfessionalRoad;
