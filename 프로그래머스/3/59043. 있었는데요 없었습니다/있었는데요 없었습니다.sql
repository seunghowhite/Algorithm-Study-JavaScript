-- 2025-02-05 
SELECT I.ANIMAL_ID AS ANIMAL_ID, I.NAME AS NAME
FROM ANIMAL_INS AS I JOIN ANIMAL_OUTS AS O
ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.DATETIME > O.DATETIME
ORDER BY I.DATETIME