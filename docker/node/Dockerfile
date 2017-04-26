FROM daocloud.io/node
MAINTAINER Liming Wu <844793587@qq.com>

############################
# 是否启动https,默认启动
############################
ARG STRICT_SSL=true
ENV STRICT_SSL ${STRICT_SSL}
RUN if [ ${STRICT_SSL} = false ]; then \ 
    npm config set strict-ssl false \
;fi

############################
# 是否更改淘宝镜像
############################
ARG REGISTRY_TAOBAO=false
ENV REGISTRY_TAOBAO $REGISTRY_TAOBAO
RUN if [ ${REGISTRY_TAOBAO} = true ]; then \
    npm config set registry "http://registry.npm.taobao.org" \
;fi

############################
# 创建非root用户 默认为nodejs
############################
ARG USER=nodejs
ARG PASSWORD=nodejs
ENV USER ${USER}
ARG PUID=1001
ARG PGID=1001
RUN groupadd -g $PGID nodejs \
    && useradd -m -d /home/$USER -s /bin/bash -u $PUID -g nodejs ${USER}
RUN chpasswd ${USER}:${PASSWORD}

############################
# 设置时区
############################
ARG TZ=UTC
ENV TZ ${TZ}
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

############################
# 安装egg-init
############################
ARG EGG_INIT=false
ENV EGG_INIT ${EGG_INIT}
RUN if [ ${EGG_INIT} = true ]; then \
    npm install -g egg-init \
;fi

############################
# 安装gitbook
############################
ARG GITBOOK_CLI=false
ENV GITBOOK_CLI ${GITBOOK_CLI}
RUN if [ ${GITBOOK_CLI} = true ]; then \
    npm install -g gitbook-cli \
;fi


############################
# 安装gulp
############################
ARG GULP=false
ENV GULP ${GULP}
RUN if [ ${GULP} = true ]; then \
    npm install -g gulp \
;fi

############################
# 安装mocha
############################
ARG MOCHA=false
ENV MOCHA ${MOCHA}
RUN if [ ${MOCHA} = true ]; then \
    npm install -g mocha \
;fi

############################
# 安装yarn
############################
ARG YARN=false
ENV YARN ${YARN}
RUN if [ ${YARN} = true ]; then \
    npm install -g yarn \
;fi

############################
# 默认的web服务守护进程，手写的
############################
COPY ./docker_start.js /docker_start.js
RUN chmod a+x /docker_start.js
WORKDIR /var/www

CMD ["/docker_start.js"]

EXPOSE 3000
