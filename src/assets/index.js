const images = import.meta.glob('./*.png', { eager: true });

export const getImage = (name) => {
  return images[`./${name}`]?.default;
};