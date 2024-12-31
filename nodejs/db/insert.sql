use restaurant;
insert into Users (Users.email, Users.password, Users.address, Users.roleId,  Users.phoneNumber, Users.image , Users.createdAt, Users.updatedAt)
VALUES ('admin@gmail.com', '12345678',  'Ha Noi', 1, '0123456789', 'null',  NOW(), NOW());
