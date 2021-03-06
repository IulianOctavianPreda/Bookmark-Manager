import { IContextMenuCreateProperties, IContextMenuUpdateProperties } from '@api/types/context-menu-api';
import { HelperService } from '@helpers/helper.service';

export class ContextMenuApiService {
  public create(createProperties: IContextMenuCreateProperties): Promise<void> {
    return HelperService.callbackToPromise(browser.contextMenus.create, [createProperties]);
  }

  public update(id: string, changeInfo: IContextMenuUpdateProperties): Promise<void> {
    return browser.contextMenus.update(id, changeInfo);
  }

  public remove(menuItemId: string): Promise<void> {
    return browser.contextMenus.remove(menuItemId);
  }

  public removeAll(menuItemId: string): Promise<void> {
    return browser.contextMenus.remove(menuItemId);
  }
}
