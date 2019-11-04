
install:
	npm install


start:
	npx babel-node src/bin/brain-games.js


publish:
	npm publish --dry-run

lint:
	npx eslint

brain-even:
	npx babel-node src/bin/brain-even.js


brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-progression:
	npx babel-node src/bin/brain-progression.js
