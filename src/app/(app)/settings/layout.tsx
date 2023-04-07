import React from 'react';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

import NavigationMenu from '~/core/ui/Navigation/NavigationMenu';
import NavigationItem from '~/core/ui/Navigation/NavigationItem';
import AppHeader from '~/app/(app)/components/AppHeader';
import AppContainer from '~/app/(app)/components/AppContainer';
import Trans from '~/core/ui/Trans';
import I18nProvider from '~/i18n/I18nProvider';
import getLanguageCookie from '~/i18n/get-language-cookie';

const links = [
  {
    path: '/settings/profile',
    label: 'common:profileSettingsTabLabel',
  },
  {
    path: '/settings/organization',
    label: 'common:organizationSettingsTabLabel',
  },
  {
    path: '/settings/subscription',
    label: 'common:subscriptionSettingsTabLabel',
  },
];

async function SettingsLayout({ children }: React.PropsWithChildren) {
  const language = getLanguageCookie();

  return (
    <I18nProvider lang={language}>
      <AppHeader>
        <span className={'flex space-x-2'}>
          <Cog8ToothIcon className="w-6" />

          <span>
            <Trans i18nKey={'common:settingsTabLabel'} />
          </span>
        </span>
      </AppHeader>

      <AppContainer>
        <NavigationMenu bordered>
          {links.map((link) => (
            <NavigationItem
              className={'flex-1 lg:flex-none'}
              link={link}
              key={link.path}
            />
          ))}
        </NavigationMenu>

        <div
          className={`mt-4 flex h-full flex-col space-y-4 lg:mt-6 lg:flex-row lg:space-x-8 lg:space-y-0`}
        >
          {children}
        </div>
      </AppContainer>
    </I18nProvider>
  );
}

export default SettingsLayout;
