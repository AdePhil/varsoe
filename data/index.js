// eslint-disable-next-line no-control-regex
export const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const urlContent =
  'I just joined the waiting list for @getvarsoe. You should check it out too. https://www.varsoe.com';

export const features = [
  {
    id: 1,
    img: '/img/invoice.png',
    name: 'invoices',
    tagline: `Generate, Send and <br />
    Follow up on Invoices`,
    description: `You never have to think about getting paid for what you do. Get invoices at the  tip of your fingers. Send invoices and automatically follow up on invoices.`,
    color: 'red',
    textLeft: true,
  },
  {
    id: 2,
    img: '/img/payments.png',
    name: 'payments',
    tagline: `Get paid from <br />anywhere in the world`,
    description: `Spend your time doing the work not thinking of how to get paid. Create payment links and it doesn’t matter how your clients pay. You simply get your money.`,
    color: 'blue',
    textLeft: false,
  },
  {
    id: 3,
    img: '/img/projects.png',
    name: 'projects',
    tagline: `Manage your <br />
    projects and clients`,
    description: `Track your projects and customers. Track payments relating to projects and customers. It’s simply that easy.`,
    color: 'yellow',
    textLeft: true,
  },
];
