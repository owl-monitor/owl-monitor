exports.owlMonitor = owlMonitor;

var defaultOption = require('./option/default');

function owlMonitor(server, options) {
  if (!server) { console.log('SERVER ISSUE'); return process.exit(1); }
  if (!options) { console.log('USE DEFAULT OPTIONS'); options = defaultOption; }

  var timer = setTimeout(function () {
    console.log(new Date());
  }, defaultOption.delayInSeconds);

  process.on('SIGINT', function () {
    console.log('SIGINT EVENT');

    dropTimer(timer);
  });

  process.on('SIGTERM', function () {
    console.log('SIGTERM EVENT');

    dropTimer(timer);
  });

  process.on('SIGKILL', function () {
    console.log('SIGTERM EVENT');

    dropTimer(timer);
  });
}

function dropTimer(timer) {
  console.log('CLEAR TIMER');

  clearTimeout(timer);
}
