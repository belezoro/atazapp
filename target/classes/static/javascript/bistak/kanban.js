/**
 * Atazen egoera pantailaren javascript fitxategia
 */
$(function(){
	$(".list-group-item").draggable({
		revert: "invalid"
	});
	
	$(".card").droppable({
		drop: function(event, ui){
			$(this).append(ui.draggable);
			var ataza = ui.draggable.prop("id");
			var egoera = $(this).prop("id");
			$.ajax({
				type: "POST",
				url: "/kanban/eguneratuAtaza",
				data: {
					atazaId : ataza,
					egoeraId : egoera
				},
				success:function(erantzuna){
					console.log(erantzuna);
				}
			})
		}
	});
});

