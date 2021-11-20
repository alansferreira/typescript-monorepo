# Typescript monorepo boilerplate

Project sample to monorepo typescript project.


* References
  * Yarn workspaces
  * Typescript


## Projects types

* CLI with `pkg`
* Restfull API with `tsoa(swagger)` 
* Shared libs with `typescript-ioc`
* `typescript-transform-paths`
* 

### CLI with `pkg`


## Docker
The `docker files` on this project use `monorepo root directory` as `docker context path`.
> Do not run docker commands in sub-folders bellow, aways on this.

### Building API Project

The `dockerfile.api` run with [docker build stages](https://docs.docker.com/develop/develop-images/multistage-build/#name-your-build-stages)

```sh
docker build -t project_name.api -f dockerfile.api .
```
