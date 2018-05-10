export default {
  items: [
    /*{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },*/
    {
      title: true,
      name: 'Results',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Performance',
      url: '/performance',
      icon: 'icon-chart',
    },
    {
      name: 'Security',
      url: '/security',
      icon: 'icon-lock',
    },
    {
      name: 'Reachability',
      url: '/reachability',
      icon: 'icon-vector',
    },
    {
      name: 'Storage',
      url: '/storage',
      icon: 'icon-disc',
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Bugzilla',
      url: '/bugzilla',
      icon: 'icon-support',
    },
    {
      name: 'About us',
      url: '/pages',
      icon: 'icon-star',
    },
    {
      name: 'Clone Firefox Repo',
      url: 'https://github.com/mozilla-mobile/firefox-ios',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
    },
  ],
};
