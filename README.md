# TEST TASK

## Application to test password strength

The essence of the assignment:

- Create a field for entering a password, under the field add 3 sections which will show the strength of the password;
- Changes in password strength must take place in real time;
  How to calculate the strength of a password:
- Only letters/digits/symbols - the password is easy;
- Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
- Has letters, symbols and numbers - the password is strong;

The color of the sections will depend on the strength of the password:

- [x] If the field is empty, all sections are gray;
- [x] If the field has less than 8 characters, all sections are red;
- [x] If the password is easy - the first section is red the rest are gray;
- [x] If the password is medium - the first two sections are yellow the last one is gray;
- [x] If the password is strong, all sections are green;
