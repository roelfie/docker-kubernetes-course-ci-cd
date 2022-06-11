# docker-kubernetes-travis-ci-cd
Project used in the Docker / Kubernetes Udemy course, to setup a CI/CD pipeline with Travis &amp; AWS.

The starting point for this project is [this](https://github.com/roelfie/docker-kubernetes-course/tree/main/src/docker/6_react_frontend/frontend)
React app from the Docker / Kubernetes course.

## Travis CI

Travis is configured to trigger the pipeline on changes to (any branch of) this repository.
When it detects a new commit, it will execute the pipeline defined in [.travis.yml](./.travis.yml):
1. build an image with `Dockerbuild.dev`
2. perform  `npm run test` on that image
3. clone the repo into an AWS S3 bucket
   1. BeanStalk detects the new bucket and automatically triggers a `docker build` and deploys the result

### Testing the build
Create React App uses Jest as its test runner. By default, npm test runs the watcher with interactive CLI.
You can force Jest to run tests once and finish the process by setting an environment variable called CI.

We can pass environment variables to 'docker run' with '-e':
```shell
docker run -e CI=true roelfie/react-app npm run test
```

### AWS Elastic Beanstalk

* Environment: `Dockerreactapp-env`
* Application: `docker-react-app`
* [URL](http://dockerreactapp-env.eba-hteduzif.eu-west-3.elasticbeanstalk.com/)





### More info
* https://docs.docker.com/engine/reference/run/#env-environment-variables
* https://create-react-app.dev/docs/running-tests/#continuous-integration

My Travis builds of this GitHub project can be found [here](https://app.travis-ci.com/github/roelfie/docker-kubernetes-travis-ci-cd/builds).


