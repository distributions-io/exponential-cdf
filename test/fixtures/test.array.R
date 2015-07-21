options( digits = 16 )
library( jsonlite )

lambda = 5
x = seq( -2, 1000, 0.5 )
y = pexp( x, lambda )

cat( y, sep = ",\n" )

data = list(
	lambda = lambda,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
