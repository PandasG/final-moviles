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
      name: 'Strategy',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Performance Strategy',
      url: '/strat/performance',
      icon: 'icon-chart',
    },
    {
      name: 'Security Strategy',
      url: '/strat/security',
      icon: 'icon-lock',
    },
    {
      name: 'Reachability Strategy',
      url: '/strat/reachability',
      icon: 'icon-vector',
    },
    {
      name: 'Storage Strategy',
      url: '/strat/storage',
      icon: 'icon-disc',
    },
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
