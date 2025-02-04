export type User = {
  id: string;
  email: string;
  password: string; // Note: For frontend use only for sending to backend, never store passwords like this on the client side.
  firstName: string;
  lastName: string;
  role: 'user' | 'employer' | 'admin';
  createdAt: Date;
};
