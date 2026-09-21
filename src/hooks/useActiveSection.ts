import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    function highlight() {
      const scrollPosition = window.scrollY + 100;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveId(id);
          break;
        }
      }
    }

    window.addEventListener('scroll', highlight);
    highlight();

    return () => window.removeEventListener('scroll', highlight);
  }, [sectionIds]);

  return activeId;
}
