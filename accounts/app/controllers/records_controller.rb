class RecordsController < ApplicationController
    def index
        @records = Record.all
        #render component: 'Records', props: { data: @records}
    end
end
