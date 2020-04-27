CREATE TABLE IF NOT EXISTS `gotit_blog`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `fullname` VARCHAR(45) NULL,
  `account_type` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL,
  `profession` VARCHAR(45) NULL,
  `access_token` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `likes` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` int NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


INSERT INTO `gotit_blog`.`users` (`email`, `account_type`) VALUES ('foo@bar.com', 'facebook');
INSERT INTO `gotit_blog`.`users` (`email`, `account_type`) VALUES ('johndoe@gmail.com', 'google');

INSERT INTO `` (`id`,`title`,`content`,`likes`,`created_at`,`created_by`,`updated_at`) VALUES (1,'Mauris ut ipsum venenatis','Suspendisse elementum, ligula vel egestas faucibus, turpis nisi cursus augue, sit amet pellentesque odio diam non tortor. Curabitur feugiat felis quis tristique fermentum. Cras in venenatis neque. Duis id ante finibus, convallis metus nec, bibendum mauris. Mauris ut ipsum venenatis, euismod libero eu, ultrices eros. Ut consectetur eu neque non auctor. Duis vulputate sem in posuere euismod. Curabitur porta arcu mi, id pharetra justo scelerisque dignissim. Suspendisse potenti. Integer volutpat euismod lectus, ac congue leo pulvinar id. Donec ut enim at ipsum ullamcorper porta. Nam sit amet efficitur arcu. Vivamus hendrerit, urna a sagittis iaculis, sapien mi tristique odio, at facilisis enim nunc vitae nisl.\n Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut imperdiet scelerisque sem sit amet vulputate. Donec ornare, augue ultrices fermentum pharetra, urna velit ullamcorper nibh, vitae consequat lorem purus non nunc. Duis vel ipsum condimentum, tincidunt ligula at, ultricies lorem. Morbi aliquet est ut vestibulum ultrices. Etiam malesuada massa dolor, sit amet lacinia diam vulputate ut. In mauris quam, iaculis condimentum suscipit eget, lacinia ac libero. Nullam augue magna, bibendum vitae urna id, luctus ullamcorper urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.','[]',NULL,5,NULL);
INSERT INTO `` (`id`,`title`,`content`,`likes`,`created_at`,`created_by`,`updated_at`) VALUES (2,'Suspendisse at lobortis felis','Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla a tellus non tellus mollis molestie sed quis nibh. Vestibulum ipsum diam, ultricies sed metus vel, mollis pretium augue. Morbi dignissim, nisl pellentesque tristique varius, sem orci scelerisque sapien, at convallis neque tellus tempor mauris. Aenean ut commodo lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eget porta mauris, vel fringilla erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris scelerisque, libero a scelerisque maximus, augue quam consectetur quam, et vulputate nibh libero at purus. Nam et consectetur quam, ac finibus enim. Sed quis pharetra risus, nec porta mauris. Cras pellentesque neque purus, ac feugiat justo vehicula ut.','[]',NULL,5,NULL);
INSERT INTO `` (`id`,`title`,`content`,`likes`,`created_at`,`created_by`,`updated_at`) VALUES (3,'Nullam a nisl massa','Etiam placerat tellus et sapien aliquet lacinia. Suspendisse semper varius nisl, quis malesuada lectus faucibus sed. Morbi auctor efficitur dolor, nec blandit nunc tempor vitae. Nullam congue consectetur bibendum. Suspendisse non ultricies felis. Integer tincidunt quam sed odio euismod, at ullamcorper lectus condimentum. Phasellus at odio vel diam rhoncus sagittis in quis purus. Aliquam erat volutpat. Sed aliquam metus in est rhoncus commodo. Ut et odio a nisl facilisis euismod ut at mi. Sed ut diam elementum, imperdiet nunc at, scelerisque arcu. Morbi at neque mattis, posuere lectus ut, euismod sem. Suspendisse vitae dui at mi rhoncus feugiat.','[1,5]',NULL,3,NULL);
