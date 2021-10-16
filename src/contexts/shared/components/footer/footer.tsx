import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import ButtonLink from '@sagebox/components/button-link/button-link';
import { socialMedia } from '@contexts/shared/metadata/general';
import LanguageContext from '@contexts/shared/contexts/language-context';

function Footer() {
  const {
    metadata: { footer },
  } = useContext(LanguageContext);

  return (
    <footer>
      <div className="w-full h-px bg-gray-800 mt-24" />
      <Container className="flex flex-col sm:flex-row sm:h-52 py-6" sub>
        <div className="flex justify-between gap-14 sm:gap-0 items-center sm:block w-full sm:w-72">
          <div className="sm:mt-4">
            <div className="font-heading font-bold text-xl italic text-white select-none">
              Gus!
            </div>
            <a
              href="mailto:gustavo@gsales.io"
              className="text-gray-400 no-underline hover:text-gray-300 transition-colors ease-in-out -mt-1 flex"
            >
              gustavo@gsales.io
            </a>
          </div>
          <p className="italic text-gray-400 sm:mt-7 text-sm text-right sm:text-left">
            {footer.verse.content} <br />
            <span className="text-gray-500 text-xs">
              {footer.verse.reference}
            </span>
          </p>
        </div>
        <div className="hidden sm:block w-px h-full bg-gray-800 mx-11" />
        <nav className="flex flex-row sm:flex-col justify-between sm:justify-start sm:gap-2 mt-10 sm:mt-0">
          {socialMedia.map(({ name, url }) => (
            <ButtonLink
              key={name}
              href={url}
              align="left"
              ghost
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </ButtonLink>
          ))}
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;