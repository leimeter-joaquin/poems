export type Stanza = string[];

export type Poem = {
  title1: string;
  title2?: string;
  text?: Stanza[] | string[];
};
