import { BookmarkService } from "../../bookmark/bookmarkService";
import { ContextMenuService } from "../context-menu.service";
import { Button } from "./button";

export class RemoveButton extends Button {
    private _bookmarkService: BookmarkService;

    public constructor(contextMenuService: ContextMenuService, bookmarkService: BookmarkService) {
        super(contextMenuService, RemoveButton.name, "☆ Remove Bookmark");
        this._bookmarkService = bookmarkService;
    }

    protected action(info: browser.menus.OnClickData, tab: browser.tabs.Tab): void {
        if (!!tab && !!tab.url) {
            this._bookmarkService.removeByUrl(tab.url);
        }
    }
}
