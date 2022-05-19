import fs from 'fs';
import { Feed } from 'feed';

const generateRSSFeed = (posts) => {
  const baseUrl = 'https://beshoi.dev';
  const author = {
    name: 'Beshoi Emad',
    email: 'beshoiemad16@gmail.com',
    link: 'https://beshoi.dev',
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: 'Feed Title',
    description: 'This is my personal feed!',
    id: 'http://beshoi.dev',
    link: 'http://beshoi.dev',
    language: 'en',
    image: 'http://beshoi.dev/img/Beshoi.png',
    // favicon: 'http://beshoi.dev/favicon.ico',
    copyright: `All rights reserved 2022, Beshoi Emad`,
    updated: new Date(),
    generator: 'awesome',
    feedLinks: {
      json: 'https://beshoi.dev/json',
      atom: 'https://beshoi.dev/atom',
    },
    author: {
      name: 'Beshoi Emad',
      email: 'beshoiemad16@gmail.com',
      link: 'https://beshoi.dev',
    },
  });

  // Add each article to the feed
  posts.forEach((post) => {
    const {
      content,
      slug,
      data: { date, description, title },
    } = post;
    const url = `${baseUrl}/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  fs.writeFileSync('public/rss.xml', feed.rss2());
};

export default generateRSSFeed;
