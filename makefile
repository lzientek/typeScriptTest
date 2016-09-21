
run-dev:
	@echo "starting express serveur"
	@node ./bin/app.js

deploy-dev:
	@npm install
	@typings install
	@tsc -p .
	@make run-dev
