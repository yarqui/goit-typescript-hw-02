/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const users: User[] = [
  {
    name: "Yar",
    surname: "Pelykh",
    email: "dogmit@gmail.com",
    password: "qwerty",
  },
];

const createOrUpdateUser = (initialValues: Partial<User>): User => {
  const userExists: User | undefined = users.find(
    (user) => user.email === initialValues.email
  );

  if (userExists) {
    return { ...userExists, ...initialValues };
  }

  const newUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
    ...initialValues,
  };

  return newUser;
};

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};
