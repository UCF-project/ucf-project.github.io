window.onload = function() {
    document.getElementById("3").innerHTML = "3. window.onlaod";
};

(function() {
    window.addEventListener("DOMContentLoaded", function() {
        document.getElementById("4").innerHTML = "4. seaf + DOMContentLoaded";
    });
})();

(function() {
    document.getElementById("5").innerHTML = "5. seaf";
})();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("6").innerHTML = "6. DOMContentLoaded";
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("7").innerHTML = "7. DOMContentLoaded fleched";
});

window.addEventListener("load", function() {
    document.getElementById("8").innerHTML = "8. load";
});

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("9").innerHTML = "9. load fleched";
});

(function() {
    window.addEventListener("load", function() {
        document.getElementById("10").innerHTML = "10. seaf + load";
    });
})();

setTimeout(function() {
    (function() {
        window.addEventListener("load", function() {
            document.getElementById("11").innerHTML = "11. async + seaf + load";
        });
    })();
}, 0);

setTimeout(function() {
    (function() {
        window.addEventListener("DOMContentLoaded", function() {
            document.getElementById("12").innerHTML = "12. async + seaf + DOMContentLoaded";
        });
    })();
}, 0);

setTimeout(function() {
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                (function() {
                    window.addEventListener("DOMContentLoaded", function() {
                        document.getElementById("13").innerHTML = "13. multi async 1s + seaf + DOMContentLoaded";
                    });
                })();
            }, 100);
        }, 150);
    }, 250);
}, 500);