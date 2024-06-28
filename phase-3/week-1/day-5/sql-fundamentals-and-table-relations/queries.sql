-- SELECT pets.id AS pet_id, pets.species, pets.name AS pet_name, owners.id AS owner_id, owners.name AS owner_name FROM pets
-- JOIN owners
-- ON owners.id = pets.owner_Id
-- WHERE pets.id = 1;

-- SELECT owners.name AS owner_name, COUNT(pets.id) as pet_count FROM owners
-- JOIN pets
-- ON pets.owner_id = owners.id
-- GROUP BY owners.id;


-- SQL has no COLLECTIONS! [] or {}

SELECT owners.name AS owner_name, pets.name AS pet_name
FROM pets
JOIN pet_owners
ON pet_owners.pet_id = pets.id
JOIN owners
ON pet_owners.owner_id = owners.id;