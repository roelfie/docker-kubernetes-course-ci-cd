# docker-kubernetes-course-ci-cd
Project used in the Docker / Kubernetes Udemy course, to setup a CI/CD pipeline with Travis &amp; AWS.

The starting point for this project is [this](https://github.com/roelfie/docker-kubernetes-course/tree/main/src/docker/6_react_frontend/frontend)
React app from the Docker / Kubernetes course.

## Travis CI

Travis is configured in [.travis.yml](./.travis.yml).

Create React App uses Jest as its test runner. By default, npm test runs the watcher with interactive CLI.
You can force Jest to run tests once and finish the process by setting an environment variable called CI.

We can pass environment variables to 'docker run' with '-e':
```shell
docker run -e CI=true roelfie/react-app npm run test
```

More info:
* https://docs.docker.com/engine/reference/run/#env-environment-variables
* https://create-react-app.dev/docs/running-tests/#continuous-integration

My Travis builds of this GitHub project can be found [here](https://app.travis-ci.com/github/roelfie/docker-kubernetes-travis-ci-cd/builds).

## AWS Elastic BeanStalk

Created an AWS Elastic Beanstalk 
* Environment: `Dockerreactapp-env`
* Application: `docker-react-app`

[URL](http://dockerreactapp-env.eba-hteduzif.eu-west-3.elasticbeanstalk.com/)

