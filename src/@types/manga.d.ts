export interface IManga {
  id: number;
  author: string;
  categories: Categories[];
  chaptersCount: string;
  description: string;
  image: string;
  link: string;
  name: string;
  score: string;
}

export interface ICategories {
  name: string;
}

export type MangaContextType = {
  mangas: MutableRefObject<IManga[]>;
};
