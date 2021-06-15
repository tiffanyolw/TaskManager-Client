$(document).ready(function() {
    $("#submitBtn").click(function() {
        validateInputs();
    });
});

function validateInputs() {
    // Validation
    let title = $("input[name=title]").val();
    let desc = $("textarea[name=desc]").val();
    let category = $("input[name=category]").val();
    let priority = $("select[name=priority]").val();
    let progress = $("select[name=progress]").val();

    // Show only 1 alert box for invalid input
    if (title.trim() == "") {
        alert("Title is empty");
    } else if (desc.trim() == "") {
        alert("Description is empty");
    } else if (category.trim() == "") {
        alert("Category is empty");
    } else if (priority.trim() == "") {
        alert("Priority is empty");
    } else if (progress.trim() == "") {
        alert("Progress is empty");
    }
}
