export type UserData = {
  avatarUrl: string,
  name: string,
}

export type MaxUserData = UserData & {
  id: number,
  email: string,
  token: string,
};
