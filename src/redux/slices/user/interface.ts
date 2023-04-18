export interface UserState {
  currentUser: null | { username: string, password: string, cod_employee: number, fromGoogle: boolean };
  loading: boolean;
  error: boolean;
};