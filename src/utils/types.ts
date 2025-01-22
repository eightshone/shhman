type connectivity =
  | {
      usePassword: true;
      password: string;
    }
  | {
      usePassword: false;
      privateKey: string;
    };

export type server = {
  name: string;
  host: string;
  port: number;
  username: string;
} & connectivity;

export type config = {
  defaultPrivateKey: string | null;
  servers: server[];
  recentServers: server[];
};

export type log = {
  time: string;
  server: string;
};

export type menu =
  | "main"
  | "exit"
  | "settings"
  | "ssh-new"
  | "ssh-list"
  | "ssh-connect";

export type json = {
  [key: string | number]: any;
};
