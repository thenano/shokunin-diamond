if which node > /dev/null; then echo 'you are good to go, run: node diamond.js <letter>'; exit; fi
if which docker > /dev/null; then echo 'you can run this in docker: docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node:4 node diamond.js <letter>'; exit; fi

  echo 'please install either node >= 4 or docker to run this application'