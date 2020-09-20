

function showHideRow(row) {
    event.stopPropagation();
    $("#" + row).toggle();
}

$(document).ready(function() {
    $.getJSON("/data/test.json",
        function(data) {
            var row = '';
            $.each(data, function(key, value) {
                row += '<tr>';
                row += '<td><label>Contract #</label><p>' +
                    value.contract_no + '</p></td>';

                row += '<td><label>Product type</label><p>' +
                    value.product_type + '</p></td>';

                row += '<td><label>Commencement date</label><p>' +
                    value.commencement_date + '</p></td>';
                row += '<td><label>Term</label><p>' +
                    value.term + '</p></td>';
                row += '<td><label>Maturity date</label><p>' +
                    value.maturity_date + '</p></td>';
                row += '<td><label>Payment amount</label><p>' +
                    value.amount + '</p></td>';
                row += '<td><label>Status</label>';
                if (value.status == "active") {
                    row += '<p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="#06BBAC" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg></p>';
                } else {
                    row += '<p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock-fill" fill="red" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/></svg></p>';
                }
                row += '</td><td><p onclick="showHideRow(&#39;hidden_row' + value.id + '&#39;);"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-down" fill="#116DFD" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/></svg></p></td>';
                row += '</tr><tr id="hidden_row' + value.id + '" class="hidden_row">';
                row += '<td class="toggle"><label>Payment frequency</label><p>' + value.payment_frequency + '</p></td>';
                row += '<td class="toggle"><label>Principal balance</label><p>' + value.principal_bal + '</p></td>';
                row += '<td class="toggle"><label>Interest balance</label><p>' + value.interest_bal + '</p></td>';
                row += '<td class="toggle"><label>Total balance</label><p>' + value.total_bal + '</p></td>';
                row += '<td class="toggle"><label>Payments remaining</label><p>' + value.payment_remaining + '</p></td>';
                row += '<td class="toggle"></td><td class="toggle"></td>';
                row += '<td class="toggle"><button type="button" class="btn btn-outline-primary">View Details<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></button></td>'
                row += '</tr>';
            });
            $('#dtTable').append(row);
        });
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}