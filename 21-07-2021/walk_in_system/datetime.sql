SELECT utc_time();
SELECT convert_tz(utc_time(),'+00:00','+05:30');
SELECT (convert_tz(CURRENT_TIMESTAMP,'+05:30','+00:00');
SELECT TIME(convert_tz(MAKETIME(09,00,00),'+05:30','+00:00'));
SELECT TIME(convert_tz(TIME(convert_tz(MAKETIME(09,00,00),'+05:30','+00:00')),'+00:00','+05:30'));
SELECT MAKETIME(09,00,00);