export interface newuserState {
  createdUser: null | { username: string, password: string, cod_employee: number, fromGoogle: boolean };
  loading: boolean;
  error: boolean;
};