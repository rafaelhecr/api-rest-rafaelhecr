CREATE TABLE IF NOT EXISTS `movie` (
  `id` int(11) NOT NULL,
  `mov_title` varchar(200) NOT NULL,
  `mov_year` int(4) NOT NULL,
  `mov_time` int(3) NOT NULL,
  `mov_lang` varchar(100) NOT NULL
  
);
 
ALTER TABLE `movie` ADD PRIMARY KEY (`id`);
ALTER TABLE `movie` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `movie` (`id`, `mov_title`, `mov_year`, `mov_time`, `mov_lang`) VALUES
(1, 'Vertigo', 1958, 128, 'English'),
(2, 'The Innocents', 1961, 100, 'English'),
(3, 'Lawrence of Arabia', 1962, 216, 'English'),
(4, 'The Deer Hunter', 1978, 183, 'English'),
(5, 'Seven Samurai', 1954, 207, 'Japanese'),
(6, 'Los Tres Huastecos', 1948, 128, 'Spanish'),
(7, 'El Barrendero', 1981, 113, 'Spanish'),
(8, 'Spider-Man', 2002, 121, 'English'),
(9, 'Spider-Man 2', 2004, 127, 'English'),
(10, 'Harry-Potter and the Philosophers Stone', 2001, 152, 'English');