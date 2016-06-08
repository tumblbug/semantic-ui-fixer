.PHONY: all test

test:
	gulp && mocha --compilers js:babel-core/register
